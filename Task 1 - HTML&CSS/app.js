setTimeout(function () {
  document.getElementById("birthday-content").innerHTML = `
    <form id="birthday-form">
        <textarea name="message" placeholder="Write a kind message..." rows="5"></textarea>
        <button class="btn-donate" type="submit">
            Submit
        </button>
    </form>
`;
}, 5000);

document.addEventListener("submit", function (e) {
  e.preventDefault();
  if (e.target.id === "birthday-form") {
    window.location.hash = "wishes";
  }
});
