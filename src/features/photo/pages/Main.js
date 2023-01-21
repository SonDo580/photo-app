import Banner from "../../../components/Banner";
import Images from "../../../constants/images";

function Main() {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG} />
    </div>
  );
}

export default Main;
