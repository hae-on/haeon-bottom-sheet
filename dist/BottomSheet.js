var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
var BottomSheet = function (_a) {
    var children = _a.children, onClose = _a.onClose;
    return ReactDOM.createPortal(_jsxs(_Fragment, { children: [_jsx(BottomSheetBackdrop, { onClick: onClose }), _jsx(BottomSheetContainer, { children: children })] }), document.querySelector('#root'));
};
var BottomSheetBackdrop = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--backdrop-color);\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--backdrop-color);\n"])));
var BottomSheetContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  bottom: 0;\n  height: 316px;\n  width: 406px;\n  height: 180px;\n  padding: 42px 16px;\n  border: none;\n  border-radius: 8px 8px 0px 0px;\n  background: var(--white-color);\n"], ["\n  position: fixed;\n  bottom: 0;\n  height: 316px;\n  width: 406px;\n  height: 180px;\n  padding: 42px 16px;\n  border: none;\n  border-radius: 8px 8px 0px 0px;\n  background: var(--white-color);\n"])));
export default BottomSheet;
var templateObject_1, templateObject_2;
