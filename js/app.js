const Counter = {
  data() {
    return {
      fieldTitle: "",
      filedPrice: "",
      filedCounter: "",
      deleteProductIcon:
        "https://icongr.am/jam/close.svg?size=30&color=currentColor",
      titleCard: "Added your product",
      titleTable: { id: "ID", Title: "Title", Price: "Price", Count: "Count" },
      orders: [],
    };
  },
  methods: {
    addProduct(e) {
      e.preventDefault();
      const timestamp = Date.now();
      const humanReadableDate = new Date(timestamp).toLocaleString(); // Преобразование в человекочитаемую строку

      this.orders.push({
        id: humanReadableDate,
        title: this.fieldTitle,
        price: this.fieldPrice,
        count: this.fieldCounter,
        deleteProduct: this.deleteProductIcon,
      });
    },
    deleteProduct(id) {
      this.orders = this.orders.filter((order) => order.id !== id);
    },
  },
  computed: {
    totalPrice() {
      return this.orders.reduce(
        (acc, order) => +acc + +order.price * +order.count,
        0
      );
    },
    sortedProducts() {
      return this.orders.sort((a, b) => b.price - a.price);
    },
  },
};

Vue.createApp(Counter).mount("#app");
