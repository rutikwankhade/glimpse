const Category = (params) => {
    return (
        <div className="bg-gray-50 w-full">
            category page
            {params.params.category}
        </div>
    );
}


export const getStaticPaths = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}
export async function getStaticProps({ params }) {

    return {
        props: { params }// will be passed to the page component as props
    }
}
export default Category;