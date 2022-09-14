/**
 * 用法：
 * import EventBus from "@/utils/event-bus.js";
 * EventBus.emit("changePhoneSuccess", { path: "/verify/phone" });
 * EventBus.on('$queryFundDetail', () => {
 *   getFundDetails(store.getCheckedFundList.join(','))
 * })
 */
import mitt from "mitt";
const VueEvent = mitt();
export default VueEvent;
