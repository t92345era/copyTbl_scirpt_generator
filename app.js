new Vue({
  el: "#app",
  data: {
    copy_from: "",
    copy_to: ""
  },
  methods: {
    sayHello() {
      this.msg = "Hello!"
    }
  },
  computed: {
    sqlServer: function () {
      return `SELECT * INTO ${this.copy_to} FROM ${this.copy_from};`;
    },
    oracle: function () {
      return `CREATE TABLE ${this.copy_to} AS SELECT  FROM ${this.copy_from};`;
    },
    postgreSQL: function() {
      return `CREATE TABLE ${this.copy_to} AS SELECT  FROM ${this.copy_from};`;
    },
    mySQL: function() {
      return `CREATE TABLE ${this.copy_to} SELECT  FROM ${this.copy_from};`;
    }
  },
  mounted() {
    //表示後にやりたいことはここに書ける
  }
})