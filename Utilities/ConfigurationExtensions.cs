namespace AspNetViteMpa.Utilities
{
    public static class ConfigurationExtensions
    {
        public static bool UseVite(this ConfigurationManager configuration)
        {
            return configuration["ASPNETCORE_VITE"]?.ToLower() == "true";
        }
    }
}
