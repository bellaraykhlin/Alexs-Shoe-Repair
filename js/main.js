function onTabClick(event) {
  event.preventDefault();
  $(this).tab("show");
}

$("ul a").click(onTabClick);
