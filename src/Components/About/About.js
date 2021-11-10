import React from 'react';
import Carousel from '../Carousel/Carousel';

const About = () => {
    return (
        <div className="">
            <h1 className="text-center text-danger">About <hr /></h1>
            <Carousel></Carousel>
            <div>
                <div className="container">
                    <div className=" mt-4">
                        <h1 className="text-dark p-4 text-center"><hr />
                            Bangladesh travel guide <hr />
                        </h1>
                        <p className="text-dark p-4">
                            <hr />
                            Bangladesh, country of South Asia, located in the delta of the Padma (Ganges [Ganga]) and Jamuna (Brahmaputra) rivers in the northeastern part of the Indian subcontinent.
                            <hr />
                            The riverine country of Bangladesh (“Land of the Bengals”) is one of the most densely populated countries in the world, and its people are predominantly Muslim. As the eastern portion of the historical region of Bengal, the area once formed, along with what is now the Indian state of West Bengal, the province of Bengal in British India. With the partition of India in 1947, it became the Pakistani province of East Bengal (later renamed East Pakistan), one of five provinces of Pakistan, separated from the other four by 1,100 miles (1,800 km) of Indian territory. In 1971 it became the independent country of Bangladesh, with its capital at Dhaka.
                            <hr />
                            <img className="container" src={"https://cdn.britannica.com/s:690x388,c:crop/91/183591-050-34AC9668/World-Data-Locator-Map-Bangladesh.jpg"} alt="" />
                        </p>
                        <h2 className="text-center">Land <hr /></h2>
                        <p className="container">
                            Bangladesh is bordered by the Indian states of West Bengal to the west and north, Assam to the north, Meghalaya to the north and northeast, and Tripura and Mizoram to the east. To the southeast, it shares a boundary with Myanmar (Burma). The southern part of Bangladesh opens into the Bay of Bengal.
                            <hr />
                            <img className="container" src={"https://cdn.britannica.com/s:690x388,c:crop/70/6270-050-8670526B/Bangladesh-map-features-locator.jpg"} alt="" />
                            <hr />
                        </p>
                        <h2 className="text-center">Relief <hr /></h2>
                        <p className="container">
                            Stretching northward from the Bay of Bengal, Bangladesh constitutes roughly the eastern two-thirds of the deltaic plain of the Padma (Ganges [Ganga]) and Jamuna (Brahmaputra) rivers. Except for small higher areas of jungle-covered old alluvium (rising to about 100 feet [30 metres]) in the northwest and north-centre—in the Barind and the Madhupur Tract, respectively—the plain is a flat surface of recent alluvium, having a gentle slope and an elevation of generally less than 30 feet (9 metres) above sea level. In the northeast and southeast—in the Sylhet and Chittagong Hills areas, respectively—the alluvial plains give place to ridges, running mainly north-south, that form part of the mountains that separate Bangladesh from Myanmar and India. In its southern region, Bangladesh is fringed by the Sundarbans, a huge expanse of marshy deltaic forest.
                            The Barind is a somewhat elevated triangular wedge of land that lies between the floodplains of the upper Padma and Jamuna rivers in northwestern Bangladesh. A depression called the Bhar Basin extends southeast from the Barind for about 100 miles (160 km) to the confluence of the Padma and Jamuna. This area is inundated during the summer monsoon season, in some places to a depth exceeding 10 feet (3 metres). The drainage of the western part of the basin is centred in the vast marshy area called the Chalan wetlands, also known as Chalan Lake. The floodplains of the Jamuna, which lie north of the Bhar Basin and east of the Barind, stretch from the border with Assam in the north to the confluence of the Padma and Jamuna in the south. The area is dominated by the Jamuna, which frequently overflows its banks in devastating floods. South of the Bhar Basin is the floodplain of the lower Padma.
                        </p>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;