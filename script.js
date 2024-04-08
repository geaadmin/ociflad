/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create series
// https://www.amcharts.com/docs/v5/charts/flow-charts/arc-diagram/
var series = root.container.children.push(am5flow.ArcDiagram.new(root, {
  sourceIdField: "from",
  targetIdField: "to",
  valueField: "value",
  orientation: "horizontal"
}));


// Configure labels
// https://www.amcharts.com/docs/v5/charts/flow-charts/arc-diagram/#Labels
series.nodes.labels.template.setAll({
  fontSize: "0.85em",
  paddingLeft: 20,
  paddingRight: 20
});

// Selectively position/rotate labels if they fit within node circle
series.nodes.labels.template.adapters.add("x", function (x, target) {
  var dataItem = target.dataItem;
  if (dataItem) {
    if (dataItem.get("circle").get("radius") > 30) {
      target.set("centerX", am5.p50);
      target.set("rotation", 0);
    }
    else {
      target.set("centerX", 0);
      target.set("rotation", 90);
    }
  }
  return x;
});


// Set data
// https://www.amcharts.com/docs/v5/charts/flow-charts/#Setting_data
series.data.setAll([
  { "from": "Evaluation", "to": "Feedback Analysis", "value": 10 },
  { "from": "Feedback Analysis", "to": "Strategy Development", "value": 9 },
  { "from": "Strategy Development", "to": "Improvement Planning", "value": 8 },
  { "from": "Improvement Planning", "to": "Implementation", "value": 7 },
  { "from": "Implementation", "to": "Result Assessment", "value": 6 },
  { "from": "Result Assessment", "to": "Monitoring", "value": 5 },
  { "from": "Monitoring", "to": "Evaluation", "value": 4 },
  { "from": "Strategy Development", "to": "Resource Allocation", "value": 3 },
  { "from": "Resource Allocation", "to": "Implementation", "value": 2 },
  { "from": "Implementation", "to": "Operational Execution", "value": 1 },
  { "from": "Operational Execution", "to": "Performance Tracking", "value": 2 },
  { "from": "Performance Tracking", "to": "Re`sult Assessment", "value": 3 },
  { "from": "Monitoring", "to": "Feedback Analysis", "value": 4 },
  { "from": "Operational Execution", "to": "Continuous Improvement", "value": 5 },
  { "from": "Continuous Improvement", "to": "Strategy Development", "value": 6 },
  { "from": "Continuous Improvement", "to": "Evaluation", "value": 7 },
  { "from": "Result Assessment", "to": "Quality Assurance", "value": 8 },
  { "from": "Quality Assurance", "to": "Feedback Analysis", "value": 9 },
  { "from": "Quality Assurance", "to": "Operational Execution", "value": 10 }
]);



// Make stuff animate on load
series.appear(1000, 100);