import { useDispatch, useSelector } from 'react-redux'
import CreatePostForm from '../../components/Forms/CreatePostForm/index'
import { useEffect } from 'react'
import { createPostThunk, getAllPostsThunk } from '../../store/posts/thunks'

const PostsPage = () => {
	const dispatch = useDispatch()
	const { posts } = useSelector((state) => state.posts)
	const { user } = useSelector((state) => state.auth)

	useEffect(() => {
		dispatch(getAllPostsThunk(user._id))
	}, [dispatch, user._id])

	const createPost = (body) => {
		dispatch(createPostThunk({ id: user?._id, body }))
	}

	return (
		<>
			<CreatePostForm createPost={createPost} />
			{posts &&
				posts.map((el) => (
					<div className='card'>
						<p>{el.title}</p>
						<p>{el.body}</p>
					</div>
				))}
		</>
	)
}

export default PostsPage
