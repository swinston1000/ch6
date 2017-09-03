var cat = {
  makeNoise: function () {
    alert(this.noise);
  },
  noise: "Meow!"
};

var dog = {
  makeNoise: function () {
    alert(this.noise);
  },
  noise: "Woof!"
};

cat.makeNoise();
dog.makeNoise();