import HomeLayout from "../components/HomeLayout";

const explore = () => {
    return (
        <div className="w-full">
            feed
        </div>
      );
}

explore.getLayout = page => (

    <HomeLayout>{page}</HomeLayout>
)
 
export default explore;