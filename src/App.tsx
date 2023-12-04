import {Suspense, lazy} from 'react'
import {Route, Routes} from 'react-router-dom'

import Loading from './Components/Loading'
const UserProfile = lazy(() => import('./Pages/UserProfile'))
const Home = lazy(() => import('./Pages/Home'))

const App = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/user/:id'
					element={<UserProfile />}
				/>
			</Routes>
		</Suspense>
	)
}

export default App
