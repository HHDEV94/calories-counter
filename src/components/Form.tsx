import { useState, ChangeEvent } from 'react'
import { categories } from '../data'
import { Activity } from '../types'

function Form() {
	const [activity, setActivity] = useState<Activity>({
		category: 1,
		name: '',
		calories: 0
	})

	const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
		const isNumberField = ['category', 'calories'].includes(e.target.id)

		setActivity({
			...activity,
			[e.target.id]: isNumberField ? +e.target.value : e.target.value
		})
	}

	return (
		<form className='space-y-5 bg-white shadow p-10 rounded-lg'>
			<div className='grid grid-cols-1 gap-3'>
				<label htmlFor='category' className='font-bold'>
					Category:
				</label>
				<select
					id='category'
					value={activity.category}
					onChange={handleChange}
					className='border border-slate-300 p-2 rounded-lg w-full bg-white'
				>
					{categories.map(category => (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					))}
				</select>
			</div>

			<div className='grid grid-cols-1 gap-3'>
				<label htmlFor='name' className='font-bold'>
					Activity:
				</label>
				<input
					id='name'
					type='text'
					value={activity.name}
					placeholder='Food, Orange Juice, Salad, Exercise, Training, Bicycle'
					className='border border-slate-300 p-2 rounded-lg'
				/>
			</div>

			<div className='grid grid-cols-1 gap-3'>
				<label htmlFor='calories' className='font-bold'>
					Calories:
				</label>
				<input
					id='calories'
					type='number'
					value={activity.calories}
					placeholder='250, 300 or 500'
					className='border border-slate-300 p-2 rounded-lg'
				/>
			</div>

			<input
				type='submit'
				value='Save Food or Exercise'
				className='bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer'
			/>
		</form>
	)
}

export default Form
