import { Frizer } from './Frizer';

class NajboljeOcenjeniFrizeri {
    private frizeri: Frizer[];

    constructor(frizeri: Frizer[]) {
        this.frizeri = frizeri;
    }

    public getTop4Frizeri(): Frizer[] {
        return this.frizeri
            .sort((a, b) => b.ocena - a.ocena)
            .slice(0, 4);
    }
}

export default NajboljeOcenjeniFrizeri;