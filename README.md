## Test Gluon

#### // Build Project

```
msbuild GluonWeb/GluonWeb.fsproj
```

#### // Build Client

```
webpack
```

#### // Copy Client to WWW

```
msbuild Gluon/GluonWeb.fsproj /target:CopyFiles
```