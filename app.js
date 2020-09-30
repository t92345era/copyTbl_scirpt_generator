new Vue({
  el: "#app",
  data: {
    copy_from: "SAMPLE",
    copy_to_input: "",
    mode: "yyyymmdd",
    yyyy: "",
    yy: "",
    clipmessage: false,
  },
  methods: {
    sayHello() {
      this.msg = "Hello!"
    },
    copy(name) {
      this.$refs[name].select();
      document.execCommand("copy");
      this.clipmessage = true;
      setTimeout(() => {
        this.clipmessage = false;
      }, 3000);
    }
  },
  computed: {
    copy_to: function() {
      if (this.mode == 'input') return this.copy_to_input;      
      if (this.mode == 'yyyymmdd') return this.copy_from + "_" + this.yyyy;
      if (this.mode == 'yymmdd') return this.copy_from + "_" + this.yy;
      return this.copy_to_input;
    },

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
    },
    sqLite: function() {
      return `CREATE TABLE ${this.copy_to} AS SELECT  FROM ${this.copy_from};`;
    }
  },
  mounted() {
    var dt = new Date();
    var fYear = ( '0000' + dt.getFullYear() ).slice( -4 );
    var sYear = ( '' + dt.getFullYear() ).slice( -2 );
    var m = ( '' + dt.getMonth() + 1 ).slice( -2 );
    var d = ( '' + dt.getDate() ).slice( -2 );

    this.yyyy = fYear + m + d;
    this.yy = sYear + m + d;
  }
  
})