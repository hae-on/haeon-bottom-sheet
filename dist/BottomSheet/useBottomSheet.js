import { useEffect, useState } from 'react';
export var useBottomSheet = function () {
    var _a = useState(false), isBottomSheetOpen = _a[0], setIsBottomSheetOpen = _a[1];
    var handleBottomSheetOpen = function () {
        setIsBottomSheetOpen(true);
    };
    var handleBottomSheetClose = function () {
        setIsBottomSheetOpen(false);
    };
    useEffect(function () {
        var handleEscapeKey = function (event) {
            if (event.code === 'Escape') {
                setIsBottomSheetOpen(false);
            }
        };
        document.addEventListener('keydown', handleEscapeKey);
        return function () { return document.removeEventListener('keydown', handleEscapeKey); };
    }, []);
    return { isBottomSheetOpen: isBottomSheetOpen, handleBottomSheetOpen: handleBottomSheetOpen, handleBottomSheetClose: handleBottomSheetClose };
};
