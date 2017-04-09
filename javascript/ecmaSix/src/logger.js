import logger from "js-logger";
import colors from "colors";

logger.useDefaults({
    formatter: function (messages, context) {
        messages.map(function(value, index) {
            if (typeof(value) == 'string') {
                let color = '';
                switch(context.level.name) {
                    case "WARN":
                        color = value.yellow;
                        break;
                    case "DEBUG":
                        color = value.cyan;
                        break;
                    default:
                        color = value.red;
                }
                return messages[index] = color;
            }
            return;
        });
        messages.unshift(new Date().toLocaleTimeString().white);
    }
});
export default logger;
