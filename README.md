```mermaid
graph TD
    A[app] --> B[navbar]
    A[app] --> C[router]
    A[app] --> D[footer]
    C[router] --> E[home]
    C[router] --> F[discography]
    C[router] --> G[band]
    F[discography] --> H[album-details]
    G[band] --> I[band-member-details]
```