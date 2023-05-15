const Book = () => {
    return(
        <div className="contentBook">
            <div className="Book">
                <h1>Titulo: IT(ESO)</h1>
                <div className="ContentInfo">
                    <div>
                        <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1334416842i/830502.jpg" />
                    </div>
                    <div className="Info">
                        <h3>Resumen</h3>
                        <p className="Resumen">
                        ¿Quién o qué mutila y mata a los niños de un pequeño pueblo norteamericano? 
                        ¿Por qué llega cíclicamente el horror a Derry en forma de un payaso siniestro que va sembrando la destrucción a su paso? 
                        Esto es lo que se proponen averiguar los protagonistas de esta novela. 
                        Tras veintisiete años de tranquilidad y lejanía una antigua promesa infantil les hace volver al lugar 
                        en el que vivieron su infancia y juventud como una terrible pesadilla. Regresan a Derry para enfrentarse 
                        con su pasado y enterrar definitivamente la amenaza que los amargó durante su niñez. Saben que pueden morir, 
                        pero son conscientes de que no conocerán la paz hasta que aquella cosa sea destruida para siempre. 
                        It es una de las novelas más ambiciosas de Stephen King, donde ha logrado perfeccionar de un modo muy personal las claves del género de terror.
                        </p>
                        <p className="Autor"> <span>AUTOR:</span> STEPHEN KING</p>
                        <div className="ContentButton">
                            <button>Obtener Libro</button>
                        </div>
                    </div>
                    
                </div>
                <div className="ContentValoracion">
                    <img src="https://natalierabbittravel.files.wordpress.com/2018/12/7894c-calificacio25cc2581n-estrellas.png" />
                </div>
            </div>
        </div>
    );
}

export default Book;