import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export const Header = () => {
  return (
	<div className='flex h-20 justify-between py-5 items-center mt-5'>
		<div className="flex items-center">
			<img src="/assets/icon.png" className="w-1/5" />
			<h1 className="text-white font-medium text-xl ml-3">Probabilidad</h1>
		</div>
		
		<a href="https://github.com/santiagobaronz/React/tree/master/Probabilidad/01-probabilidad-cartas" target={'_blank'} className="bg-blue py-2 px-7 flex text-black-bg rounded-full items-center" id="tooltip_website">
			<i className="bi bi-github text-xl"></i>
			<p className="font-medium ml-3">Califica en GitHub</p>
		</a>

		<ReactTooltip
                anchorId="tooltip_website"
                place="bottom"
                content="Califica y sígueme en mi GitHub"
            />
	</div>
  )
}
