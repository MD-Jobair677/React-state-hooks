import React from 'react'
import Expons from './ExponsiveItem/Expons';
import Card from './ExponsiveItem/UI/Card';

function App() {
    // props ar maddoma data patano
    // fast a array of object likta hoba ,ata korbo jano akoi component bar bar use korla data daynamic kora jai.means akoi component but data deffirent

    let exponsDtata = [
        {
            id: 1,
            title: 'This is fast tutionfee',
            amount: 300,
            date: new Date(2021, 4, 4),

        },
        {
            id: 2,
            title: 'This is fast tutionfee',
            amount: 200,
            date: new Date(2021, 4, 4),

        },
        {
            id: 3,
            title: 'This is fast tutionfee',
            amount: 100,
            date: new Date(2021, 4, 4),

        },
        {
            id: 4,
            title: 'This is fast tutionfee',
            amount: 400,
            date: new Date(2021, 4, 4),

        }

    ];

    return (

        <Card>
        <div>


            <Expons
                // akana data patano hoica
                id={exponsDtata[0].id}
                title={exponsDtata[0].title}
                amount={exponsDtata[0].amount}
                date={exponsDtata[0].date}


            ></Expons>
        </div>

        <div>


            <Expons
                // akana data patano hoica
                id={exponsDtata[3].id}
                title={exponsDtata[3].title}
                amount={exponsDtata[3].amount}
                date={exponsDtata[3].date}


            ></Expons>
        </div>
        <div>


            <Expons
                // akana data patano hoica
                id={exponsDtata[1].id}
                title={exponsDtata[1].title}
                amount={exponsDtata[1].amount}
                date={exponsDtata[1].date}


            ></Expons>
        </div>
        <div>


            <Expons
                // akana data patano hoica
                id={exponsDtata[2].id}
                title={exponsDtata[2].title}
                amount={exponsDtata[2].amount}
                date={exponsDtata[2].date}


            ></Expons>
        </div>
    </Card>
       



    )
}
export default App;