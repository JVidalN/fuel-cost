calculateCost;
function calculateCost(form) {
  form.kmmonth.value = 4 * form.kmday.value * form.dayrun.value;
  form.kmyear.value = form.kmmonth.value * 12;
  form.costmonth.value =
    (form.kmday.value / form.kml.value) * form.fuelcost.value * form.dayrun.value * 4;
  form.costyear.value = form.costmonth.value * 12;

  return false;
}
