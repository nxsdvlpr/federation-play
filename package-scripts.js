const { repo } = require('nxsutil');
const path = require('path');
const { randomString } = require('@nxs/helper');

const clearableDirs = `node_modules .turbo .git dist @generated generated`;

const { apps, packages } = repo();

console.log(randomString());

const buildScripts = () => {
  packages.map((p) => {
    if (!p.path) {
      p.path = path.resolve(__dirname, `packages/${p.name}`);
    }
  });

  apps.map((app) => {
    if (!app.path) {
      app.path = path.resolve(__dirname, `apps/${app.name}`);
    }
  });

  const scripts = {
    foo: `echo foo`,
    fooo: `echo fooo`,
    clear: `nps root.clear`,
    prepare: {
      default: `nps prepare.install prepare.nest`,
      install: `pnpm i`,
      nest: `nps prisma.generate`,
    },
    build: `pnpm run build`,
    generate: {
      module: `pnpm run codegen module`,
    },
    dev: `pnpm run dev && cd ./apps/gateway && pnpm run gw`,
    start: `pnpm run start`,
    prisma: {
      init: `nps`,
      migrate: `nps`,
      generate: `nps`,
      seed: `nps`,
    },
    root: {
      clear: `rm -rf node_modules`,
    },
  };

  packages.forEach((p) => {
    scripts.clear += ` ${p.name}.clear`;

    scripts[p.name] = {
      clear: `cd ${p.path} && rm -rf ${clearableDirs}`,
    };
  });

  apps.forEach((app) => {
    scripts.clear += ` ${app.name}.clear`;

    switch (app.type) {
      case 'nestjs': {
        scripts.prisma.init += ` ${app.name}.prisma.init`;
        scripts.prisma.migrate += ` ${app.name}.prisma.migrate`;
        scripts.prisma.generate += ` ${app.name}.prisma.generate`;
        scripts.prisma.seed += ` ${app.name}.prisma.seed`;

        scripts[app.name] = {
          clear: `cd ${app.path} && rm -rf ${clearableDirs}`,
          prisma: {
            init: `cd ${app.path} && pnpm dlx prisma init`,
            migrate: `cd ${app.path} && pnpm dlx prisma migrate dev`,
            generate: `cd ${app.path} && pnpm dlx prisma generate`,
            seed: `cd ${app.path} && pnpm run seed`,
          },
        };
      }
    }
  });

  // console.log(scripts);

  return scripts;
};

module.exports = { scripts: buildScripts() };
