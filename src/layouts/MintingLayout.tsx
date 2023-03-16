import Header from 'components/MintHeader';
import Footer from 'components/MintFooter';

const MintingLayout = (props: MintingType) => {
  return(
  <div className='app-layout'>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
};

interface MintingType {
  children?: any;
}

export default MintingLayout;
