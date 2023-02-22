
export const Header = () => {
  return (
	<div className='flex h-20 justify-between py-5 items-center mt-5'>
		<div className="flex items-center">
			<img src="/icon.png" className="w-1/5" />
			<h1 className="text-white font-medium text-xl ml-3">Probabilidad</h1>
		</div>
		
		<a href="" className="bg-blue py-2 px-7 flex text-white rounded-full items-center">
			<i className="bi bi-github text-xl"></i>
			<p className="font-medium ml-3">Califica en GitHub</p>
		</a>
	</div>
  )
}
