import Component from "../Component.js";

export default class Filters extends Component{
  constructor(element, props) {
    super(element, props);

    this.render();


    this.on('change', 'query-field', (event) => {
      props.onQueryChange(event.target.value)
    });

    this.on('change', 'sort-field', (event) => {
      props.onSortField(event.target.value)
    });
  }

  render() {
    this.element.innerHTML = `
          <section>
            <p>
              Search:
              <input
                data-element="query-field"
                value="${this.props.query}"
              >
            </p>
    
            <p>
              Sort by:
              <select
                 data-element="sort-field"
              >
                <option 
                  value="name" 
                  ${this.props.sortField === 'name' ? 'selected' : ''}
                  >Alphabetical</option>
                <option 
                  value="age"
                  ${this.props.sortField === 'age' ? 'selected' : ''}
                  >Newest</option>
              </select>
            </p>
          </section>
    `;
  }
}

