
export const Routes = {
    liveScore:"/football-current-live",
    latestResults:"/football-popular-leagues",
    fixtures:"/football-get-matches-by-date",
    standing:"/football-get-standing-all"
    
}

export type ApiRoutes = keyof typeof Routes 