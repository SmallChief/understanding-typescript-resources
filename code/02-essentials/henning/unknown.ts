function process(val: unknown): void {
  switch (typeof val) {
    case "string":
      console.log(`String value: ${val.toUpperCase()}`);
      break;
    case "number":
      console.log(`Number value: ${val + 10}`);
      break;
    case "boolean":
      console.log(`Boolean value is ${val ? "true" : "false"}`);
      break;
    default:
      console.log(`Unknown type: ${val}`);
  }
}

function processLog(val: unknown) {
  if (
    typeof val === "object" &&
    !!val &&
    "log" in val &&
    typeof val.log === "function"
  ) {
    val.log("Logging from processLog");
  }
}
