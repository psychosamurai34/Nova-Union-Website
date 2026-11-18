$ErrorActionPreference = 'Stop'
$src = 'C:\Users\lockd\OneDrive\Documents\Default Project\Nova Union Website'
$dst = 'C:\Users\lockd\OneDrive\Documents\Default Project\nova-union-deploy.zip'

Add-Type -AssemblyName System.IO.Compression.FileSystem

if (Test-Path $dst) { Remove-Item $dst -Force }
[System.IO.Compression.ZipFile]::CreateFromDirectory($src, $dst)
Write-Host ("Re-zipped for deploy: " + (Get-Item $dst).Length + " bytes")
Write-Host 'Next: drop nova-union-deploy.zip onto the same site on app.netlify.com/drop (or a linked Netlify site) and everyone sees the update.'
