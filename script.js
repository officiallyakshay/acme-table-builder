class TableBuilder {

  constructor(columnHeader, data, selector) {
    this.columnHeader = columnHeader;
    this.data = data;
    this.selector = selector;
  }

  init() {
    this.render();

    document.querySelector(this.selector).addEventListener('click', (ev) => {
      if (ev.target.tagName === 'TH') {
        const idx = [...ev.target.parentNode.children].indexOf(ev.target);
        const header = this.columnHeader[idx];
        const key = header.key;
        this.data = this.data.sort((a, b) => {
          if (header.type === 'number') {
            return a[key] - b[key];
          }
          return a[key].localeCompare(b[key]);
        });
        this.render();
      }
    });

  }

  render() {
    const tableHeaders = `<tr>${this.columnHeader.map(header => `<th>${header.key}</th>`).join('')}</tr>
    ${this.data.map(item => `<tr>${this.columnHeader.map(header => `<td>${item[header.key]}</td>`).join('')}</tr>`)}`
    document.querySelector(this.selector).innerHTML = tableHeaders;
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
