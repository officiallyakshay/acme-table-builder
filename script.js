class TableBuilder {

  constructor(columnHeader, data, selector) {
    this.columnHeader = columnHeader;
    this.data = data;
    this.selector = selector;
  }

  init() {
    this.render();
  }

  render() {
    const th1 = `<th> ${this.columnHeader} </th>`
    document.querySelector(this.selector).innerHTML = html;
  }

}


const usersTable = new TableBuilder(
  [
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Position',
      key: 'role'
    },
    {
      title: 'Salary',
      key: 'salary',
      type: 'number'
    }

  ],
  [
    {
      name: 'Moe',
      role: 'CEO',
      salary: 80000
    },
    {
      name: 'Larry',
      role: 'CTO',
      salary: 70000
    },
    {
      name: 'Curly',
      role: 'CPO',
      salary: 75000
    },
    {
      name: 'Shep',
      role: 'Security Officer',
      salary: 1000000 
    }
  ],
  '#usersTable'//id of DOM element
);
usersTable.init();











