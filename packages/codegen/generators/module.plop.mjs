import { repo } from 'nxsutil';

const repoData = repo();

const appNames = repoData.apps.map((app) => app.name);

export const modulePlop = {
  description: 'this is a skeleton plopfile',
  prompts: [
    {
      type: 'list',
      name: 'workspace',
      message: 'Select your worspace',
      choices: appNames,
    },
    {
      type: 'input',
      name: 'name',
      message: 'Set your module name',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'apps/{{workspace}}/src/{{lowerCase name}}/{{lowerCase name}}.service.ts',
      templateFile: 'templates/nest/module/service.hbs',
    },
    {
      type: 'add',
      path: 'apps/{{workspace}}/src/{{lowerCase name}}/{{lowerCase name}}.controller.ts',
      templateFile: 'templates/nest/module/controller.hbs',
    },
    {
      type: 'add',
      path: 'apps/{{workspace}}/src/{{lowerCase name}}/{{lowerCase name}}.resolver.ts',
      templateFile: 'templates/nest/module/resolver.hbs',
    },
    {
      type: 'add',
      path: 'apps/{{workspace}}/src/{{lowerCase name}}/{{lowerCase name}}.module.ts',
      templateFile: 'templates/nest/module/module.hbs',
    },
  ],
};
