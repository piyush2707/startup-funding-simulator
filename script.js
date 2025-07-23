document.getElementById("fundingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const team = parseInt(document.getElementById("team").value);
  const revenue = parseInt(document.getElementById("revenue").value);
  const growth = parseFloat(document.getElementById("gr vvowth").value);

  const funding = (team * 5000) + (revenue * 2) + (growth * 1000);
  const roundedFunding = Math.round(funding / 1000) * 1000;

  document.getElementById("result").textContent = `Estimated Funding: $${roundedFunding.toLocaleString()}`;
});
