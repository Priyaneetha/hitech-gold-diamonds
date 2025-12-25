<script>
fetch("https://hitech-gold-diamonds.onrender.com/api/goldrate")
  .then(res => res.json())
  .then(data => {
    if (data && data.rate) {
      document.getElementById("goldRate").innerText =
        `₹ ${Number(data.rate).toLocaleString("en-IN")}`;
    } else {
      document.getElementById("goldRate").innerText = "₹ —";
    }
  })
  .catch(() => {
    document.getElementById("goldRate").innerText = "₹ —";
  });
</script>
