import React, { useState, useCallback, useEffect, useRef } from 'react';
import atomize from "@quarkly/atomize";
const NavItems = atomize.div();

const MyNav = props => {
	const [isOpen, setOpen] = useState(false);
	const clickItemRef = useRef(null);

	const handlerOpen = () => setOpen(true);

	const handlerClose = () => setOpen(false);

	const updateDimensions = () => {// console.log(clickItemRef)
	};

	useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		return function cleanup() {
			window.removeEventListener("resize", updateDimensions);
		};
	}, []);
	return <nav onMouseEnter={handlerOpen} onMouseLeave={handlerClose}>
		            
		<a href="#" className="menu-trigger">
			CATEGORIES ▼
		</a>
		            
		<div className="munecontainer">
			            
			<NavItems display={isOpen ? 'block' : 'none'}>
				                
				<ul ref={clickItemRef}>
					                    
					<li>
						<a href="/content">
							Content
						</a>
					</li>
					                    
					<li>
						<a href="/multimedia">
							Multimedia
						</a>
					</li>
					                    
					<li>
						<a href="/animation">
							Animation
						</a>
					</li>
					                    
					<li>
						<a href="/integration">
							Integration
						</a>
					</li>
					                
				</ul>
				            
			</NavItems>
			            
		</div>
		        
	</nav>;
};

export default MyNav;