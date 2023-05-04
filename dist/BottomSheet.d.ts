/// <reference types="react" />
interface BottomSheetProps {
    children: React.ReactNode;
    onClose: () => void;
}
declare const BottomSheet: ({ children, onClose }: BottomSheetProps) => import("react").ReactPortal;
export default BottomSheet;
