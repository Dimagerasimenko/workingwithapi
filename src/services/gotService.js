class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getAllBooks() {
        const result = await this.getResource(`/books/`);
        return result.map(this._transformBook)
    }

    async getBook(id) {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }

    async getAllCharacters() {
        const result = await this.getResource(`/characters?page=5&pageSize=10`);
        return result.map(this._transformCharacter);
    }

    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character)
    }

    async getAllHouses() {
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse)
    }

    async getHouse(id) {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }

}

export default GotService;