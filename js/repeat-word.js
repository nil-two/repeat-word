(function() {
  function repeat(text, count, separator) {
    var ls = [];
    for (var i = 0; i < count; i++) {
      ls.push(text);
    }
    return ls.join(separator);
  }

  document.getElementById("generate").addEventListener("click", function() {
    var src = document.getElementById("src").value;
    var count = parseInt(document.getElementById("count").value, 10);
    var separator = document.getElementById("separator").value;
    var result = repeat(src, count, separator);
    document.getElementById("result").value = result;
  });
})();
