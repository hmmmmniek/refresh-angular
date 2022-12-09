
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonComponent } from "src/app/shared/widgets/button/button.widget.component";
enum ToeTacTicState {
    cross = 'Cross',
    circle = 'Circle',
    empty = 'Empty'
}
enum MatchState {
    win = 'Win',
    lost = 'Lost',
    playing = 'Playing'
}

@Component({
    selector: 'app_toe-tac-tic-game',
    standalone: true,
    imports: [
        CommonModule,
        ButtonComponent
    ],
    templateUrl: 'toe-tac-tic-game.feature.component.html',
    styleUrls: [ 'toe-tac-tic-game.feature.component.scss' ]
})
export class ToeTacTicGameComponent {
    currentPlayer: ToeTacTicState = ToeTacTicState.circle;
    state: ToeTacTicState[][] = [];
    
    fullRowStates: number[][][] = [
        [
            [1,4,7], [1,5], [1,6,8]
        ],
        [
            [2,4], [2,5,7,8], [2,6]
        ],
        [
            [3,4,8], [3,5], [3,6,7]
        ]
    ]
    foundFullRowIndexes: number[] = [];
    fieldFull: boolean = false;
    constructor() {
        this.resetGame();
    }

    selected(x: number, y: number) {
        if(this.fieldFull || this.foundFullRowIndexes.length > 0) {
            return;
        }
        
        if(this.state[x][y] === ToeTacTicState.empty) {
            this.state[x][y] = this.currentPlayer;
            if(this.currentPlayer === ToeTacTicState.circle) {
                this.currentPlayer = ToeTacTicState.cross;
            } else {
                this.currentPlayer = ToeTacTicState.circle;
            }
        }    
    
        
        this.checkMatchState();
    }

    checkMatchState() {
        let fullRowCounts: {
            [key in ToeTacTicState]?: {[key: number]: number}
        } = {};
        let full = true;
        for(let y = 0; y < 3; y++) {
            for(let x = 0; x < 3; x++) {
                if(this.state[x][y] !== ToeTacTicState.empty) {
                    this.fullRowStates[x][y].forEach(rowIndex => {
                        const type = this.state[x][y];
                        fullRowCounts[type] ??= {}
                        if(fullRowCounts[type] != undefined) {
                            fullRowCounts[type]![rowIndex] ??= 0;
                            fullRowCounts[type]![rowIndex] += 1;
                        }
                    });
                } else {
                    full = false;
                }
            }
        }

        this.fieldFull = full;

        this.foundFullRowIndexes = Object.keys(fullRowCounts).filter(key => key !== ToeTacTicState.empty).reduce<number[]>((acc, key: string) => {
            const counts = fullRowCounts[key as ToeTacTicState];
            const foundRows = Object.keys(counts!).map(rowIndex => +rowIndex).filter(rowIndex => counts![rowIndex] === 3);
            return acc.concat(foundRows);
        }, []);


    }

    resetGame() {
        this.currentPlayer = ToeTacTicState.circle;
        this.fieldFull = false;
        this.state = [
            [ToeTacTicState.empty, ToeTacTicState.empty, ToeTacTicState.empty],
            [ToeTacTicState.empty, ToeTacTicState.empty, ToeTacTicState.empty],
            [ToeTacTicState.empty, ToeTacTicState.empty, ToeTacTicState.empty],
        ];
        this.foundFullRowIndexes = [];
    }

    getBoxClasses(x: number, y: number): string {
        return `${this.state[x][y]} ${this.isPartOfRow(x, y, this.foundFullRowIndexes) ? 'full-row' : ''}`;
    }
    isPartOfRow(x: number, y: number, foundFullRowIndexes: number[]): boolean {
        return this.fullRowStates[x][y].find(rowIndex => foundFullRowIndexes.includes(rowIndex)) != undefined;
    } 
}
