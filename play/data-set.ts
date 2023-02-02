export class Items {
  private list: Array<string> = [];

  get() {
    return this.list;
  }

  add(item: string): boolean {
    if (this.contains(item)) {
      return false;
    }

    this.list[this.size()] = item;

    return true;
  }

  contains(item: string): boolean {
    for (let element of this.list) {
      if (element === item) {
        return true;
      }
    }

    return false;
  }

  size(): number {
    return this.list.length;
  }

  remove(item: string): boolean {
    if (!this.contains(item)) {
      return false;
    }

    const itemIndex = this.findIndex(item);
    this.list.splice(itemIndex, 1);

    return true;
  }

  private findIndex(item: string) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] === item) {
        return i;
      }
    }

    return -1;
  }
}

const items = new Items();

console.log(items.add('Hehe'));
console.log(items.add('Hehe'));
console.log(items.add('Haha'));
console.log(items.add('Haha'));

console.log(items.remove('Haha'));
console.log(items.remove('Huhu'));
console.log(items.get());
console.log(items.size());
