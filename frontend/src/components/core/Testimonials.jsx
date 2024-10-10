import React from 'react'

const Testimonials =()=>{
    return (
        <div id="testimonials">
      <section class="bg-gray-300 dark:bg-gray-50">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-500">Testimonials</h2>
                <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Hear from our management and faculties about outstanding placements records</p>
            </div> 
            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          
                

                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-white dark:border-gray-300">
                    <a href="#">
                        <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://www.adishankara.ac.in/images/faculties/faculty289.jpg?1574473337" alt="Bonnie Avatar"/>
                    </a>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-600">
                            <a href="#">Nirmal Joshi</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">Head Coordinator</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">The synergy between our students and placement support team yields remarkable placement records. Employers 
                            commend our graduates' adaptability and competence, reinforcing our standing as a top choice for recruiting top-tier talent</p>
                        
                    </div>
                </div> 
                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-white dark:border-gray-300">
                    <a href="#">
                        <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://www.akgec.ac.in/wp-content/uploads/2019/08/Dr.-Rakesh-Srivastava.jpg" alt="Jese Avatar"/>
                    </a>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-600">
                            <a href="#">Dr. Rakesh Srivastava</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">Dean-Training & Placement</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">AKGEC has established itself as an institution par excellence, dedicated to provide students with a 
                            strong scientific, technical and humanistic foundation. What distinguishes AKGEC from other institutions is the unswerving commitment towards 
                              transform students into professionals and technocrats who will stand tall amongst the crowd </p>
                        
                    </div>
                </div> 
                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-white dark:border-gray-300">
                    <a href="#">
                        <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://www.adishankara.ac.in/images/faculties/faculty210.jpg?1168768120" alt="Michael Avatar"/>
                    </a>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-600">
                            <a href="#">Rajesh Kumar Upadhyay</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">Placement Asst</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Consistent excellence in placements reflects our institution's commitment to nurturing employable talent. Employers consistently laud our graduates for their skills and readiness for the workforce, affirming our status as a preferred recruitment hub. </p>
                       
                    </div>
                </div> 

                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-white dark:border-gray-300">
                    <a href="#">
                        <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="data:image/jpeg;base64,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
                        qddw5qmrEmWDO1YkHpndVinSFlvpjNqNFms7remNAtXDVAWwPEq2djm76aKrlWq8ouDHPEaaaqrFUgZ4CrBw5g5eRUeOyNu9e8PcOuqnO8Qz5rpGDYJmgAQ0LOc+kXGPbNMIwwv1jQBH1b92VuUaO7Luo5EK0WtmGNgBJTbmHGNpMrky8Hd8bliU27Q5zgNX7nw0CZWNqCJIQ2VMrLQLCTOuCJDYgjZQjChO3xKc0bpoGyUYpjIacrBLjoAFVbF2/R7+z2t5gfrqvHUgDDRr1WlNr47ZkkT/QImnp3lJoLbFPElu70Zgyd4VRwy3BqEEa8wr/ikFu2ipmIMy1WvZzGviNwrjxRnJ72MjYSIHz1Hmgq+Dl25dHiITjBbxlVoPPp3zsmFamptotJMqX3HJ6o+H1CV45W/duG0Aj3mFcnuDXSQEk4koUy9xaOy5s+DokfFawfZzZo1sU3DQYI/hdPmD+aCfWe5zi0aDQeATNzfRUHkzmLT/l3Bnzj3qt07x42K6cattnHmlSUQ2jUe8kDSFpSb2j6TkhRdu5aKF7ydytdJzWE1rkAFrNig16vIVCPQt2rRbsCBG6xGfs2p7JWJWOix21VrgCCixlGpIVPtL8sERITCzFW47FNpE7k7BS1RSI8Uv3VD6NkkE7Dmn3DfCJ0qVh3hv5p9w5wsylBIz1OvTwV8w7CQNXe5Zyn0i1HtivCsEmJENVot7YNEAKVjQNluFmUahqWYph7fRvdLhAJgHSfyTYIXFR+5qfyH5JNJouEmnsU5iPpjogaCZ0zDh3rkfJ6ceAe5qEAlJKF41hdUOr9vAHaO9PsYYcjo8vzVDxYOa4MnkSSdpjkVrjjYsk2kO7viWDIE6bFE4RxWypvDXRMGIPgTuq7bYTTqNBdWg6kEGQZ2RbuE2ZJbVPd2QZHRa6YmN5G7GnEfEzWMG2qpo4jbBgyTPxU2K8PF2uZpIGggj4pBVwioz8PuKqMYGeSWRPge8N35a+eR1KvjbwObIK5NRqubpMfRXHh+roWZp7Obw7lGWFbl4M17DHErnRIat1mDi7aFPi079Uqqg+jfG+Ux48lMEXlnbCMYp0/QNhwOYjxjUwfMBVZ1JvJoQ92+qT2ydNunwQ2c9SuyEKR5mTJqdjEU2+yhsQpgEQIUArO6leEl3Uq6M7NF7CJo2ntaBS3FtzEABFioAVr4PwE1HeleOwNu8ofhrht1Zwc8QwfFdTwvDxAYwQAs8k+kXCPbAfug9n4LFav2QFiwNTjeC8MNMOqu/yhdDwbBWwAxuVqqNhjPozOQHxCsNpxryLQFrLUyVSLvZWTKY03RwcFSm8Y0/aC3HGNL2mqaY7LoHhbB4VPtOKmVHimwhzzs0an3dFZKNKpu6B3DVNQbE5JBbqzQoLisC1wy7gj3iEBe3EODRzU1N8kMG+58Ato4l2ZvI+ir0idumhTJlTQHpqoMdtvR1ifwu7Q+vxUdCrpC8/JDTKj18c9UbGNd4LYPNLqGFMdJImNBOundKJoVJEHwRbGx4KE6NKsS2dj6F/Ya2NdC0R2tyrA65ZkIfb9ACyNhPhG60dSB1UdxdHKWR5rVS2E1FvdCbEG2wp6trZ4khok7nTpsqbiNqSew2o2T+MjRsaHTnKttWtvokuI1XF2pVKQSxwrZti+y4eaWkvJqO3PLToITDCMP9Gaji1zZGVs+yj7MZQO9B8RYpDQ0HWPcoc3LYz0RjuKsQrh9TKPVagrum9zDka52o9UTA35eC1ou07ym+FXLB2XN578x5raEdznyz2/SoVC4GHDyIg+4qF2XoF0urbMc3Uhzf4wHDwSm94TpP1aCw9aZkebD9IXRRxUUjK32VmYdAE2vuEbhutNzao7uy//AEH6EpH92cHZagc0jcEEH3FMRI2XGBqegVkwjAWmHVXDual9lWazYAJzYYyxhktDvNZyb6LVFywrCy6I0aFa7Sg1ggKk2XGVPaA3zTFvFVP2m+9Z0yrLdmCxVX/xTT6t96xKgs5V6Y9VgrnqtLek97g1jXOceTQSfcFdeGOAar3B9y3JTGuSe0/uMeqPiujSZWVewt61Z2Wkxzz3CY8Ty81dMK4BfGa4qBv8LIJ83HQeQKvVvYMpNy0mNY0cmgAKdlTqFSgg1C7AMFo20+iYAT6zjq53i7p3J84aIVh10U9Uw1XRDKXxHiLaNQvPIbdSdgEw4GpVH0nXFb16xkDkymNGtHxP+ZUPiZ7q96WDUSGgd8Bddw63DKbG+y0N9whMDTEcPbWZlO+4PQ/kqZc2j6L8rxHQ8iOoK6FTCjv7JlVuV48DzHeFlkxKf6b4czx/hQ6VSD3FNxq1LMTwx9B0HUHZ3Irawvo0cuCeNo9PHlT3GNu4nYIa5YROm/zR9Nw0Igd4XmIVGEiPNTVI1vcrtUAT70tfQBdJ5apneuAlIri81iYHMpK2VKkgjErkNaqrdPLnSUXe3ecrzD7Mvd3cyt4QOLLkTG/C2ENec9QS0aAdT3+CUVrb0dV9OfUcR4jkfMQrpYwxoA2AVPx6fvWb2h8W6fIhdUY0jhnK3Yxw+uR2TqCirikWmW7ckst3JzRdLI/XgmSaW+IGYeA7x396YvtKVdsOaHdA4THg7cJdRtZcrJhmH6bIoVlVveAmu1o1Cw+y7tNPg7cfFVzEeEryiJNEvHtU+0PcNfguz0aCIa1Ogs+diCNCIPQiD7itwV3nEcHoVhFWkx/eQJHg7cKicR/Z4WgvtDP+G46n+V30PvSaAovpFin/AGVdf/Eq/wCgrFOkrc7lY4LSt2xSptYO4anxO5RrHI8CUHXEFbGVkjQCoi0A6hT02Aha3NPTVAGrrUHVp1Q13VIaQeilpVY57IHiCoRTLwOX0QBzK0H/AFwcf/dmf8y7LR1ErluAWPpK7Dv2gfqupUDED9aJgyRq3XgC3ASAgubdr2lrxIP60PJVHFOHn05dTl7P9w8ufkrm4LUqZQUuS4ZJQ4OYuvi3SfIoKvjThOYHyXRsawajXac7QHRo4aHzPNckxGzpy806ge1jshLHAwehErmngo7YfJvuiG8xtx2CVvrE6ucspWL6rstMOeSmlHg+sT2okQSAZjxTjj+iZ5vsCs253Q0acyrLZ0gNANFHa4S5giITG3owtlGjncmyaYaqrxA2cruYd81aK/qpFitAuDR/EEyTS0tdt9U5t7bTRSWGHkAabBN7G1koFZHhdrrsrRbU4GyXYXQhzh4JrcnK3zhMk9Lu7ko6URC3c2AFrsmIypyWoCx4/X68F7RGsd0+SBkceKxSQ7oF4ih2M2So7lshS05GiwsTJAqVX4aH/siavq+SAq9l4nY6FHv9QnuQAho1S+qWT4IvigBtu7wSnhx3pLknoCfedEZx5Wy2/iQPeQgBPwZRmoT0Ctd/UyBr/ZdJ8OY9yTcF20MLz+LbyTzER2YQDDgZGi3CWYFWzUsp3YS3yG3wTMIAwoe7rtpsc97g1rRLidgAp6jwASTAGpPQDcriH2i8Yvua3oqUi3puBH+I9v4z3DkPNADPiziOrcksbNOgdMv4ntOTtPncEP8AVHQyqNVtiB4cvKT4asf704tsXluWq0GdCRA3BDjG05X6RHqBG1LdtQS2Ad3Dpq0ka9M1bdVQFSDIO23lt8vVb702wi6NOoKlNxbU6+0Ojh7MAnXr5oa8tCzU8t99wDI8ZpHuW9m0bdPp2RPU6HTvUgdNwvEqd1TJAy1G6PZ7JOxB5tPIrdloFy0Y462vG1aeuQBj2+20+s3xjboQus2dyyoxtVhljwHNPjyPQhSMArW61tsMz1aYjTV3w/qjrhyY4C3tu09VgHmT/wDlANkdO0AcVNhNHdSh3aetsJbugRJbs7Z8VtiJ7VNvV3yBP0U9FnbKDv3/APU0R3uP+0/mmCCrjktDzW1V3bA6KNx080gNit6Q/ekdGfX+iy0bJ8Fq18Pqu6N+UoAE/aQWLm/7Xd1KxMujsFrVkQdxoUQUE8Q7ONiNUaNUyADEqEtPwUVK5zUXHmAQfEJjUEhV66eab3tOjXtJ84QAu4D1fUd3AfErz7R62lJnV0+4Ij7PWA0Xu5l8e4BKuLHelvadMaxA/wBRH5IQ3yXLCrbJSpj+Fvvhe3jpKMyw0DoIS6o7taoEa4T2ajh1+adQkzW5XAhbcQ4maNBz2CXEQN4E/iKAKp9onEhE2tEn/FcP+APzSLhfh9tY53slo68044c4YLx6ev2s0kA7mfxFPrJvoiWAQ3kgBBxLw1QqNlg9HUAgQOy6Ds4fVc97dJ2VwLS3Qgzp5jl2nHTqu2fd82pVV49wJr6Xp2tAfTHa/ibPdzE/NUmBULhgrU84GvPL1c5k6t3P71+4Sm07LC/mBHPc8tddzr+pZYS4Q9pIJIj8JJOenpyPmlv4XN55ttBoBppvHelIaFtW3zSefzV3+zi4cGOouPYJlk/hed/I6earFKmrXglCKZI3UICyVjJ13mCnHD9UGk9/V7h/phvzBVfr1C4Nfzcwz/O3Qn6ptwq2LOnO5Lne9xTBhFEzm8Ubhjd/FCURumOHN0KBBDG6pNd1P+tpjo15+CeNGqrNZ84gO5jvjCGNDjN23eH9VoTr+uq0pulzvH6BSRr+uqBBlm2GylGK18lCu/8AhPyTl5yt8lU+LqxFo7+IhvxCAXJzpYt9FiRodyI3HmFpQqdmOi2e7SeiCrPhwjZwVGZMasuhK+LW/uc/MT8kTTf2kNxe+LSp+t0AA/Zy79xU/n+gSvCv32JvPJrj/tEfNMOBDksqrztmcR5BD/Z7RmtWqHp8XOlIZeqh0Sqoe2mFw5AO9ZMRM7loiwwPblcJB3B5qF7dFLaHRAHlemMsDRJ6rM3in1RshKWsh5CAJ6AgapBxXdEW1ctIBAjyMT8Cntd0Bc44sxYkPoN5uzOPlo39dyaAVYLbNaC8tGgA1A3LqPtN0dqef9a7Trkv6zHTk0DkOSslR4p20TGY9WiYNHsmHjpv+hUKdTtA77fAR1O2ychjqnTVswNnYVWs3ghWzh7YrMbH2GWQqUnMmDDmg9M25+CbUbYU6bKY1DQBP1S/BTEjvTaoJhNEgzBromVm2Ag2M1TG3bomBudFT6L5v3k8mH6K3V3aFUuzdN489x+aTBD23Op80dbMkoK3amlBsBAEGJ1YaqZxzVilSZ1dPwP5qy4zVlzWDmVS+Oas1mM9ls+8/wBEMaK7K8W+b9aLxTbKs7bV9U+H0Sm69Sn4D6LFisg2pesfP5ITjT+5nyWLEwAuHf8A0t3hU+qm+zv1Kn8w+SxYkMs9yhuaxYgQUfVWW36+C8WIAlbzSyt65/XMLxYgDy89Q/rkuRY7/b1PEfJyxYqiA5xb+7M/+kfO2XPn7+Q/4LFiJAN8J2V2wL1D+uixYsyuizYP9UyuOX66LFiaJZsNkbQ9QL1YmBDcqm4d/en/AOb/AJLFiTGiwWvNN7f1QsWJiK9d/wB6b5/JU3jP+9n+VvycsWKWUhGsWLECP//Z" alt="Bonnie Avatar"/>
                    </a>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-600">
                            <a href="#">Rk Agarwal</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">Director general</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Our strong collaboration between students and the placement team consistently delivers impressive results. Employers praise our graduates for their versatility and skills, solidifying our reputation as a premier source for top talent recruitment.</p>
                        
                    </div>
                </div> 
                 
            </div>  
        </div>
      </section>
        </div>
    )
};
export default Testimonials;
