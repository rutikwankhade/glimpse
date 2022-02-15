import { supabase } from "../lib/supabaseClient"

export const categories = [
    {
        emoji: '✍',
        name: 'biographies',

    },
    {
        emoji: '💡',
        name: 'business',

    },
    {
        emoji: '🌇',
        name: 'fiction',

    },
    {
        emoji: '📚',
        name: 'literature',

    },
    {
        emoji: '🌆',
        name: 'non fiction',

    },
    {
        emoji: '💖',
        name: 'romance',

    },
    {
        emoji: '🔬',
        name: 'science',

    },
    {
        emoji: '☯',
        name: 'spirituality',

    },
    {
        emoji: '🎨',
        name: 'art',

    },
    {
        emoji: '🌌',
        name: 'fantasy',

    },
    {
        emoji: '📜',
        name: 'history',

    },
    {
        emoji: '🔮',
        name: 'mystery',

    },
    {
        emoji: '📿',
        name: 'religion',

    },
    {
        emoji: '🛠',
        name: 'technology',

    },
    {
        emoji: '🌻',
        name: 'self',

    },
]


export const handleReviewSubmit = async (bookInfo) => {

    console.log('the data before submit', bookInfo)
    // const reviewData = JSON.stringify(data)
    const user = supabase.auth.user();
    console.log(user.user_metadata)


    try {
        const user = supabase.auth.user();
        console.log(user)
        let { error,data } = await supabase.from('bookreviews').insert({
            username: user.user_metadata.name,
            avatar: user.user_metadata.avatar_url,
            userId: user.id,
            primaryColor: bookInfo.theme.primaryColor,
            secondaryColor: bookInfo.theme.SecondaryColor,
            review: bookInfo.review,
            bookId: bookInfo.bookId,
            category: bookInfo.category,
            cover: bookInfo.cover,
            title: bookInfo.title

        });

        console.log(data)
        if (error) {
            throw error;
        }


    } catch (error) {
        console.log(error)

    }

}