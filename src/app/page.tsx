import Hero from './components/ui/hero';
import Subscribe from "./components/elements/subscribe";
import Socials from "./components/elements/socials";

export default function Home() {
  return (
   	<main className="bg-base-200 min-h-screen">
		<Hero />
		<section className="bg-base-200 flex items-center justify-center">
			<Subscribe />
		</section>
		<section className="bg-base-200 flex items-center justify-between px-56 pt-16 pb-4">
		<p className="text-lg">Copyright &copy; 2025. GondwanaChain LLC. All rights reserved.</p>
		<Socials />
		</section>
	</main>
	
  );
}
