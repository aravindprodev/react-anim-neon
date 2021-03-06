import styled from 'styled-components';

const Body = styled.body`
display: flex;
align-items: center;
background: ${props => props.color || "#031321"};
font-family: ${props => props.font || "consolas"};
`;

const Btncss = styled.a`
--primary-color: ${props => props.btn || '#2196f3;'};
--text-color: ${props => props.sbtn || '#255784'};
position: relative;
display: inline-block;
padding: 15px 30px;
color:var(--primary-color);
text-transform: uppercase;
text-decoration: none;
letter-spacing: 4px;
font-size: 20px;

overflow: hidden;
transition: 0.1s;
&:hover{
  color: var(---text-color);
  background:var(--primary-color);
  box-shadow: 0 0 10px var(--primary-color),0 0 40px var(--primary-color),0 0 80px var(--primary-color);
  transition-delay: 1s;
}
& span{
    position: absolute;
    display: block;
}
& span:nth-child(1){
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,var(--primary-color));
}
&:hover span:nth-child(1){
    left: 100%;
    transition: 1s;
}
& span:nth-child(3){
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg,transparent,var(--primary-color));


}
&:hover span:nth-child(3){

    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
}
& span:nth-child(2){
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg,transparent,var(--primary-color));

}
&:hover span:nth-child(2){
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
}
& span:nth-child(4){
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg,transparent,var(--primary-color));

}
&:hover span:nth-child(4){
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
   
    
}
`;


export {Btncss, Body};