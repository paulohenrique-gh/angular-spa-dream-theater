```mermaid
graph TD
    A[app] --> B[navbar]
    A[app] --> C[router]
    A[app] --> D[footer]
    C[router] --> E[home]
    C[router] --> F[discography]
    C[router] --> G[members]
    F[discography] --> H[album-details]
    G[members] --> I[member-details]
```