import Highway from '@dogstudio/highway';
import gsap from 'gsap';


class Fade extends Highway.Transition{
    in({from, to, done}){
        const tl = gsap.timeline();
        tl.fromTo(to,
            {left: '-100%', top: '50%'}, 
            {left: '0%', duration: 0.5}
        )
        tl.fromTo(to,
            {height: '2vh'}, 
            {height: '90vh', top: '10%', duration: 0.5, onComplete: function(){
                from.remove();
                done()
            }})
            .fromTo(to.children[0], 2, {opacity: 0}, {opacity: 1})
    }
    out({from, done}){
        done();
    }
}

export default Fade;