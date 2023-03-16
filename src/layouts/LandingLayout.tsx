const LandingLayout = (props: LandingType) => {
  return <div className='overflow-hidden'>{props.children}</div>;
};

interface LandingType {
  children?: any;
}

export default LandingLayout;
