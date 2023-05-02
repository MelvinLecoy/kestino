type Props = {
    divStyle: string;
    btnStyle: string;
    col: boolean;
};

function MenuBtns({ divStyle, btnStyle, col }: Props) {
    const blk = col ? 'blk' : '';
    return (
      <div className={divStyle}>
        <a href="/#about" className={blk}><button className={btnStyle}>About</button></a>
        <a href="/#experience" className={blk}><button className={btnStyle}>Experience</button></a>
        <a href="/#skills" className={blk}><button className={btnStyle}>Skills</button></a>
        <a href="/#projects" className={blk}><button className={btnStyle}>Projects</button></a>
      </div>
    );
}

export default MenuBtns;