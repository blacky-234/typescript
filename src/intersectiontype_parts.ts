type Draggable ={
    drag: () => void
};

type Resizeble = {
    resize: () => void
};

type UIWidget = Draggable & Resizeble;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}