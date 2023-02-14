class User {
    #id = 'xyz'
    constructor(name) {
      this.name = name;
    }
    getUserId() {
      return this.#id;
    }
    #destroy = () => {
      this.#id = null;
    };
  }